import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";
import accountReducer from "../Account/accountrReducer";

const store = configureStore ({
    reducer: {
        modulesReducer,
        assignmentsReducer,
        accountReducer,

    }
})

export default store;