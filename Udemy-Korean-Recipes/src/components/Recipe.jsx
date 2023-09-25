const menu = ['참치 비빔밥', '야채 비빔밥']

function Recipe() {
    const randomMenu = Math.random() > 0.5 ? menu[0] : menu[1];

    return (
        <div>
            <p>{randomMenu}</p>
            <p>냉장고를 열어봐라</p>
        </div>
    );
}

export default Recipe;
