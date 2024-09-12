import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-15',
        value: .15,
        label: '15%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
]

type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-bold text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex items-center gap-2">
                        <label htmlFor={tipOption.id} className="flex items-center cursor-pointer">
                            <i
                                className={`bi ${tipOption.value === tip ? 'bi-star-fill text-yellow-500' : 'bi-star text-gray-400'}`}
                                style={{ fontSize: '1.5rem' }}
                            ></i>
                            <span className="ml-2">{tipOption.label}</span>
                            <input
                                id={tipOption.id}
                                type="radio"
                                name="tip"
                                value={tipOption.value}
                                onChange={e => setTip(+e.target.value)}
                                checked={tipOption.value === tip}
                                className="sr-only"
                            />
                        </label>
                    </div>
                ))}
            </form>
        </div>
    )
}
