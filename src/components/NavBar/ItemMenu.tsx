


type Props = { name: string }

export function ItemMenu( {name}: Props ) {
    return (
        <button>
            <span>{name}</span>
        </button>
    )
}