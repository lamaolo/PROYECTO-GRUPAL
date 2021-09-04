import axios from "axios";

import { CONSTANTS } from './constants.js';

require("dotenv").config();
const { REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

export function getTasksByUser(projectId, userId){
  return async function(dispatch){
    // obtiene todas las tareas del projecto pasado por projectId para luego filtrar y agarrar solo las del usuario loggeado en el reducer
    var tasks = await axios.get(`http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}/task/${projectId}`);
    return dispatch({
      type: CONSTANTS.GET_USER_TASKS,
      payload: tasks.data.filter(task => task.asignedTo === userId)
    })
  }
}

export function getHelpTasks(projectId){
  return async function(dispatch){
    // obtiene todas las tareas del projecto pasado por projectId
    var helpTasks = await axios.get(`http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}/task/${projectId}`);
    return dispatch({
      type: CONSTANTS.GET_HELP_TASKS,
      payload: helpTasks.data.filter(t => t.helpNeeded) //filtro las tareas del proyecto que requieren de ayuda
    })
  }
}