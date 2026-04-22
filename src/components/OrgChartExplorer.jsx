import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const laneLabels = {
  all: 'Vue globale',
  direction: 'Direction',
  support: 'Support',
  poles: 'Pôles',
  filiales: 'Filiales',
};

function OrgChartExplorer({ nodes, subsidiaries }) {
  const [query, setQuery] = useState('');
  const [activeLane, setActiveLane] = useState('all');
  const [activeNodeId, setActiveNodeId] = useState(nodes[0]?.id ?? '');

  const subsidiaryMap = Object.fromEntries(subsidiaries.map((item) => [item.slug, item]));
  const normalizedQuery = query.trim().toLowerCase();
  const filteredNodes = nodes.filter((node) => {
    const matchesLane = activeLane === 'all' || node.lane === activeLane;
    const haystack = [node.title, node.lead, node.summary, ...(node.tags ?? [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return matchesLane && (!normalizedQuery || haystack.includes(normalizedQuery));
  });
  const activeNode =
    filteredNodes.find((node) => node.id === activeNodeId) ??
    nodes.find((node) => node.id === activeNodeId) ??
    filteredNodes[0] ??
    nodes[0];

  useEffect(() => {
    if (filteredNodes.length && !filteredNodes.some((node) => node.id === activeNodeId)) {
      setActiveNodeId(filteredNodes[0].id);
    }
  }, [filteredNodes, activeNodeId]);

  const groups = [
    { id: 'direction', label: 'Direction', items: filteredNodes.filter((node) => node.level === 0) },
    { id: 'poles', label: 'Pôles', items: filteredNodes.filter((node) => node.level === 1) },
    { id: 'filiales', label: 'Entités', items: filteredNodes.filter((node) => node.level >= 2) },
  ].filter((group) => group.items.length);

  const parentNode = activeNode?.parentId ? nodes.find((node) => node.id === activeNode.parentId) : null;
  const childNodes = activeNode ? nodes.filter((node) => node.parentId === activeNode.id) : [];
  const lineage = [];

  if (activeNode) {
    let cursor = activeNode;

    while (cursor) {
      lineage.unshift(cursor);
      cursor = cursor.parentId ? nodes.find((node) => node.id === cursor.parentId) : null;
    }
  }

  const relatedSubsidiaries = (activeNode?.linkedSubsidiaries ?? [])
    .map((slug) => subsidiaryMap[slug])
    .filter(Boolean);

  return (
    <div className="org-chart-shell">
      <aside className="org-chart-sidebar">
        <div className="org-chart-search-card">
          <label className="org-chart-search">
            <span className="mini-text">Recherche intelligente</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher une direction, un pôle ou une filiale"
            />
          </label>

          <div className="org-chart-lanes" aria-label="Filtres organigramme">
            {Object.entries(laneLabels).map(([lane, label]) => (
              <button
                key={lane}
                type="button"
                className={`org-lane-chip ${activeLane === lane ? 'is-active' : ''}`}
                onClick={() => setActiveLane(lane)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="org-chart-list">
          {groups.length ? (
            groups.map((group) => (
              <section className="org-chart-group" key={group.id}>
                <p className="mini-text">{group.label}</p>
                <div className="org-chart-group-items">
                  {group.items.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      className={`org-node-button ${activeNode?.id === node.id ? 'is-active' : ''}`}
                      onClick={() => setActiveNodeId(node.id)}
                    >
                      <strong>{node.title}</strong>
                      <span>{laneLabels[node.lane] ?? 'Structure'}</span>
                    </button>
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className="org-empty-state">
              <p>Aucun resultat pour cette recherche.</p>
            </div>
          )}
        </div>
      </aside>

      <section className="org-chart-detail">
        {activeNode ? (
          <>
            <div className="org-chart-breadcrumb" aria-label="Rattachement">
              {lineage.map((node) => (
                <button key={node.id} type="button" onClick={() => setActiveNodeId(node.id)}>
                  {node.title}
                </button>
              ))}
            </div>

            <article className={`content-card org-focus-card org-focus-card-${activeNode.lane}`}>
              <p className="mini-text">{laneLabels[activeNode.lane] ?? 'Structure'}</p>
              <h3>{activeNode.title}</h3>
              {activeNode.lead ? <p className="org-focus-lead">{activeNode.lead}</p> : null}
              <p>{activeNode.summary}</p>

              {activeNode.tags?.length ? (
                <div className="org-focus-tags">
                  {activeNode.tags.map((tag) => (
                    <span className="info-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="org-detail-grid">
                <div className="org-detail-block">
                  <p className="mini-text">Rattachement direct</p>
                  <p>{parentNode ? parentNode.title : 'Niveau le plus élévé du groupe'}</p>
                  {parentNode ? (
                    <button type="button" className="button button-ghost" onClick={() => setActiveNodeId(parentNode.id)}>
                      Voir le rattachement
                    </button>
                  ) : null}
                </div>

                <div className="org-detail-block">
                  <p className="mini-text">Entités reliées</p>
                  {relatedSubsidiaries.length ? (
                    <div className="org-related-links">
                      {relatedSubsidiaries.map((subsidiary) => (
                        <Link key={subsidiary.slug} className="org-related-link" to={`/filiales/${subsidiary.slug}`}>
                          <strong>{subsidiary.name}</strong>
                          <span>{subsidiary.sector}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p>Aucune filiale directement rattachée à cet élément.</p>
                  )}
                </div>
              </div>

              {childNodes.length ? (
                <div className="org-detail-block">
                  <p className="mini-text">Sous-ensembles</p>
                  <div className="org-child-grid">
                    {childNodes.map((node) => (
                      <button key={node.id} type="button" className="org-child-card" onClick={() => setActiveNodeId(node.id)}>
                        <strong>{node.title}</strong>
                        <span>{node.summary}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          </>
        ) : null}
      </section>
    </div>
  );
}

export default OrgChartExplorer;
