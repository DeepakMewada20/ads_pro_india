import type { Stat } from "./common"

export interface ResultCard {
  id: string
  tag: string
  stats: Stat[]
  note: string
}
