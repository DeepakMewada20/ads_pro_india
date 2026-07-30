interface ServiceFeaturesProps {
  features: string[]
}

export function ServiceFeatures({ features }: ServiceFeaturesProps) {
  return (
    <ul className="mt-4 space-y-2">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2 text-[0.8rem] text-muted"
        >
          <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
          {feature}
        </li>
      ))}
    </ul>
  )
}
