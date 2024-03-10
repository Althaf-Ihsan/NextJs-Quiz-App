import { create } from "zustand";
export type ConfigType = {
  numberofquestions: number;
  category: { id: number; name: string };
  level: "string",
  type: "string",
  status: "string",
  score: "number",
  config?:any
};
const defaultConfig = {
  numberofquestions: 10,
  category: {
    id: 0,
    name: "",
  },
  type:'',
  status:'',
  score:0
};
const useQuiz = create((set) => ({
  config:{...defaultConfig},
  addLevel: (level:string) => set((state:ConfigType) => ({ config: {...state.config,level:level}})),
  addNumberOfQuestions: (count:number) => set((state:ConfigType) => ({ config: {...state.config,numberofquestions:count}})),
  addCategory: (id:number,name:string) => set((state:ConfigType) => ({ config: {...state.config,id:id,name:name}})),
  addStatus: (status:string,name:string) => set((state:ConfigType) => ({ config: {...state.config,status:status}})),
  addSCore: (score:number) => set((state:ConfigType) => ({ config: {...state.config,score:score}})),



}));
export default useQuiz;