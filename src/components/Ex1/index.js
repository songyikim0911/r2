import KioskContainer from "./KioskContainer";
import InputEx from "./InputEx";
import BoardList from "./BoardList";

export default () => {
    return (
        <>
           <BoardList></BoardList>
        <KioskContainer></KioskContainer>
            <BoardList></BoardList>
        </>
    )
}