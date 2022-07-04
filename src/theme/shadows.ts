export const shadows: IShadows = {
  default: 'rgba(0, 0, 0, 0.12)',
  button: {
    focus: '#00EF8F',
    default: 'rgba(0, 0, 0, 0.12)',
    disabled: 'rgba(0, 0, 0, 0.05)',
    inset: 'rgba(0, 0, 0, 0.05)',
  },
  modal: {
    backdrop: 'rgba(0, 0, 0, 0.64)',
    container: 'rgba(0, 0, 0, 0.08)',
  },
  card: {
    container: `-0.4px -0.4px 0px rgba(255, 255, 255, 0.24),
    0.3px 0.3px 0px rgba(0, 0, 0, 0.16), 2px 2px 4px rgba(0, 0, 0, 0.12),
    inset 0px 0px 2px rgba(0, 0, 0, 0.08)`,
  },
};

export interface IShadows {
  default: string;
  button: {
    focus: string;
    default: string;
    inset: string;
    disabled: string;
  };
  modal: {
    backdrop: string;
    container: string;
  };
  card: {
    container: string;
  };
}
