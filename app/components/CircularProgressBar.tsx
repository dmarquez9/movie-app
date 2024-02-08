const radius = 50
const strokeWidth = 12.5
const strokeDasharray = 2 * Math.PI * radius

type CircularProgressBarProps = {
  value: number
}

function CircularProgressBar({ value }: CircularProgressBarProps) {
  const progress = (value / 10) * 100
  const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100

  let gradientId = 'gradientRed'

  if (value >= 6 && value < 8) {
    gradientId = 'gradientYellow'
  } else if (value >= 8) {
    gradientId = 'gradientGreen'
  }

  return (
    <div className="relative">
      <svg className="transform -rotate-90" width="125" height="125">
        <defs>
          <linearGradient id="gradientRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#ff0000', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#ff6161', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="gradientYellow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#FFC107', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#F6D860', stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient id="gradientGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#56ab2f', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#a8e063', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          className="text-gray-300"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="62.5"
          cy="62.5"
        />
        <circle
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke={`url(#${gradientId})`}
          fill="transparent"
          r={radius}
          cx="62.5"
          cy="62.5"
          style={{ transition: 'stroke-dashoffset 0.5s ease 0s' }}
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-2xl font-bold font-poppins">
          {value.toFixed(1)}
        </div>
      </div>
    </div>
  )
}

export default CircularProgressBar
