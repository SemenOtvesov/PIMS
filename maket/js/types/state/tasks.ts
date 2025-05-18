export type TtasksState = { taskList: Array<Ttask>; adminTaskList: Array<Ttask> };
export type Ttask = {
    id: string;
    name: string;
    info: string;
    refsource: string;
    refphoto: string;
    reward: number;
};
