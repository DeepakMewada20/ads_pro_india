export interface CTAContent {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  buttons: {
    primary: { label: string; href: string }
    secondary: { label: string; href: string }
  }
}
