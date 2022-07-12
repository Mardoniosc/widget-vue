interface SetupPayload {
  onProduction: () => void;
  onDevelopment: () => void;
}

export function setup ({ onProduction, onDevelopment }: SetupPayload): void {
  if (process.env.NODE_EN !== 'production') {
    onDevelopment()
    return
  }

  onProduction()
}
