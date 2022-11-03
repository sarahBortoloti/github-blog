import { dateFormatter } from "../../../../utils"
import { Card, CardHeader } from "./styles"

type CardProps = {
  title: string,
  brief: string,
  published_in: string,
}

export const CardView = ({ title, brief, published_in }: CardProps) => {
  const date = dateFormatter().format(new Date(published_in));
  return (
    <Card>
      <CardHeader>
        <h5>
          {title}
        </h5>
        <span>{date}</span>
      </CardHeader>
      <section>
        {brief}
      </section>
    </Card>
  )
}