import { Card, CardHeader } from "./styles"

type CardProps = {
  title: string,
  brief: string,
  published_in: string,
}

export const CardView = () => {
  return (
    <Card>
      <CardHeader>
        <h5>
          JavaScript data types and data structures
        </h5>
        <span>Há 5 dias</span>
      </CardHeader>
      <section>
        Programming languages all have built-in data structures, but these often differ from one language to another.
        This article attempts to list the built-in data structures available in JavaScript and what properties they have.
        These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </section>
    </Card>
  )
}