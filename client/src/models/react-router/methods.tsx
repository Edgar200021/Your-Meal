import { Params } from "react-router-dom";

export interface IAction {
	request: Request,
	params: Params
}