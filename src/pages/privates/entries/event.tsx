import { useEffect, useState } from "react";
import { colors } from "@/styles/colors";
import type { EventType } from "@/types/event";
import { GetEventsAction } from "./event.action";

export function EventPage() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const fetchEvents = async () => {
    try {
      const data = await GetEventsAction();
      setEvents(data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveEvent = async () => {
    try{

    }catch (err) {
      console.error(err);
    }
    setIsCreateModalOpen(false);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <main style={styles.page}>
      <div style={styles.searchWrapper}>
        <input
          placeholder="Pesquisar eventos..."
          style={styles.search}
        />
      </div>

      <section>
        <h2 style={styles.title}>Filtros</h2>

        <div style={styles.filters}>
          <button style={styles.filter}>Conta</button>
          <button style={styles.filter}>Categoria</button>
          <button style={styles.filter}>Tipo</button>
          <button style={styles.filter}>Status</button>
        </div>
      </section>

      <section style={{ marginTop: 48 }}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.title}>Eventos</h2>

          <button
            style={styles.addButton}
            onClick={() => setIsCreateModalOpen(true)}
          >
            + Adicionar evento
          </button>
        </div>

        <div style={styles.table}>
          {events.length === 0 ? (
            <div style={styles.empty}>
              Nenhum evento encontrado.
            </div>
          ) : (
            events.map((event) => (
              <EntryCard key={event.id} {...event} />
            ))
          )}
        </div>
      </section>

      {/* Modal de criação */}
      {isCreateModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={{ marginBottom: 20 }}>Novo Evento</h2>

            <p style={{ color: colors.textLight }}>
              Aqui ficará o formulário de criação.
            </p>

            <div style={styles.modalActions}>
              <button
                style={styles.cancelButton}
                onClick={() => setIsCreateModalOpen(false)}
              >
                Cancelar
              </button>

              <button style={styles.saveButton}
              onClick={handleSaveEvent}>
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

type EntryCardProps = Omit<EventType, "Id">;

function EntryCard(props: EntryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={styles.row}
        onClick={() => setOpen(!open)}
      >
        <div style={styles.left}>
          <span style={styles.arrow}>
            {open ? "▼" : "▶"}
          </span>

          <strong>{props.name}</strong>
        </div>

        <div style={styles.right}>
          <span>
            {(props.amount.amount / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          <span>{props.startDate}</span>
        </div>
      </div>

      {open && (
        <div style={styles.details}>
          <Info label="Descrição" value={props.description} />
          <Info label="Conta" value={props.accountId} />
          <Info label="Categoria" value={props.categoryId} />
          <Info label="Recorrência" value={props.recurrence} />
          <Info label="Status" value={props.status} />

          <div style={styles.actions}>
            <button style={styles.actionButton}>
              Editar
            </button>

            <button style={styles.actionButton}>
              Duplicar
            </button>

            <button
              style={{
                ...styles.actionButton,
                color: colors.danger,
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div style={styles.info}>
      <span style={styles.label}>{label}</span>
      <span>{value}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: "32px 48px",
  },

  searchWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 48,
  },

  search: {
    width: 600,
    height: 50,
    borderRadius: 999,
    border: "none",
    padding: "0 18px",
    background: colors.cardBG,
    color: colors.text,
    fontSize: 16,
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    color: colors.text,
    margin: 0,
  },

  addButton: {
    height: 44,
    padding: "0 22px",
    borderRadius: 10,
    border: "none",
    background: colors.primary,
    color: colors.textButton,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 15,
  },

  filters: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 18,
  },

  filter: {
    height: 56,
    borderRadius: 999,
    border: "none",
    background: colors.cardBG,
    color: colors.text,
    cursor: "pointer",
    fontSize: 16,
  },

  table: {
    background: colors.cardBG,
    borderRadius: 24,
    overflow: "hidden",
  },

  empty: {
    padding: 50,
    textAlign: "center",
    color: colors.textLight,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 24px",
    borderBottom: `1px solid ${colors.border}`,
    cursor: "pointer",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    color: colors.text,
    fontSize: 18,
  },

  right: {
    display: "flex",
    gap: 24,
    color: colors.text,
    fontSize: 18,
  },

  arrow: {
    width: 16,
    color: colors.primary,
  },

  details: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 18,
    padding: 24,
    borderBottom: `1px solid ${colors.border}`,
    background: "rgba(255,255,255,.015)",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    color: colors.text,
  },

  label: {
    color: colors.textLight,
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: ".5px",
  },

  actions: {
    gridColumn: "1 / -1",
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 16,
  },

  actionButton: {
    background: colors.background,
    color: colors.text,
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: "10px 18px",
    cursor: "pointer",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    width: 650,
    background: colors.cardBG,
    borderRadius: 18,
    padding: 30,
  },

  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 30,
  },

  cancelButton: {
    padding: "10px 18px",
    borderRadius: 8,
    border: `1px solid ${colors.border}`,
    background: colors.background,
    color: colors.text,
    cursor: "pointer",
  },

  saveButton: {
    padding: "10px 22px",
    borderRadius: 8,
    border: "none",
    background: colors.primary,
    color: colors.textButton,
    cursor: "pointer",
  },
};