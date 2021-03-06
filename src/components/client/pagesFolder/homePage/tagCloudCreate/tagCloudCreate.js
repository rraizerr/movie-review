import { Container } from "react-bootstrap";
import { TagCloud } from "react-tagcloud";

function TagCloudCreate({ reviewsData }) {

    const data = [
        { value: "Анчартед", count: 35 },
        { value: "Матрица", count: 30 },
        { value: "Человек-паук", count: 28 },
        { value: "Охотники за приведениями", count: 18 },
        { value: "Вечные", count: 30 },
        { value: "Веном 2", count: 25 },
        { value: "Дюна", count: 20 },
        { value: "Шан-Чи", count: 18 },
        { value: "Главный герой", count: 20 },
        { value: "Отряд самоубийц", count: 18 },
        { value: "Чёрная вдова", count: 20 },
        { value: "Мортал комбат", count: 35 },
        { value: "Майор Гром", count: 20 },
        { value: "Довод", count: 28 },
        { value: "Бессмертная гвардия", count: 25 },
        { value: "Соник в кино", count: 25 },
        { value: "Кома", count: 18 },

    ]

    // const data = reviewsData.map(item => {
    //     return {
    //         value: item.movieTitle,
    //         count: item.tagRating,
    //         key: item.id
    //     }
    // })

    // console.log(data);

    return (
        <div className="mb-4">
            <Container>
                <h3 className="mt-5 mb-4">Облако Тегов</h3>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={data}
                    onClick={tag => alert(`"${tag.value}" was selected!`)}
                />

            </Container>
        </div>
    )
}

export default TagCloudCreate;