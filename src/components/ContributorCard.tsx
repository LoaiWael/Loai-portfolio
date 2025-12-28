import { useId } from "react"
import type { Icontributor } from "../types"

const ContributorCard = ({ person }: { person: Icontributor | undefined }) => {
  const id = useId();

  return (
    <a target="_blank"
      href={person?.communication} key={id}>
      <img src={person?.photo} alt={person?.name} draggable="false" loading="lazy" />
      <div className="contributor-info">
        <span className="contributor-info-name">{person?.name}</span>
        <small className="contributor-info-position">{person?.position}</small>
      </div>
    </a>
  )
}

export default ContributorCard