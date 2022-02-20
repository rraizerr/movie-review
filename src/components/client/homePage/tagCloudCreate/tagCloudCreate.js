import { Container } from "react-bootstrap";
import { TagCloud } from "react-tagcloud";

function TagCloudCreate() {

    const data = [
        { value: "Анчартед", count: 38 },
        { value: "Матрица", count: 30 },
        { value: "Человек-паук", count: 28 },
        { value: "Вечные", count: 30 },
        { value: "Игра в кальмара", count: 33 },
        { value: "Веном 2", count: 25 },
        { value: "Дюна", count: 20 },
        { value: "Шан-Чи", count: 18 },
        { value: "Главный герой", count: 20 },
        { value: "Отряд самоубийц", count: 18 },
        { value: "Локи", count: 20 },
        { value: "10 худших фильмов", count: 18 },
        { value: "13 самых дорогих сериалов", count: 12 },
        { value: "Мортал комбат", count: 35 },
        { value: "Майор Гром", count: 20 },
        { value: "Фильмы про катастрофы", count: 18 },
        { value: "Довод", count: 28 },
        { value: "Соник в кино", count: 25 },
        { value: "Кома", count: 18 },

    ]

    return (
        <div className="mb-4">
            <Container>
                <h3 className="mt-5 mb-4">TagCloud</h3>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={data}
                    onClick={tag => alert(`'${tag.value}' was selected!`)}
                />

            </Container>
        </div>
    )
}

export default TagCloudCreate;