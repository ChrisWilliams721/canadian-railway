
export default class Tasks {
    constructor(taskId, taskTitle, taskPriority, taskDate, taskStatus, taskOperator) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.taskPriority = taskPriority;
        this.taskDate = taskDate;
        this.taskStatus = taskStatus;
        this.taskOperator = taskOperator;
    }

    //Methods
    getTaskInfo() {
        return {
            taskId: this.taskId,
            taskTitle: this.taskTitle,
            taskPriority: this.taskPriority,
            taskDate: this.taskDate,
            taskStatus: this.taskStatus,
            taskOperator: this.taskOperator
        };
    }
    createTask() {
        return this.getTaskInfo();
    }
    modifyTask() {
        return this.getTaskInfo();
    }
    deleteTask() {
        return this.getTaskInfo();
    }
}
