import mongoose from "mongoose";
import { ICurso } from "../models/curso.model";
import { IRate } from "../models/rate.model";

export interface IDocente extends mongoose.Document{
    NombreDocente: string;
    Aprobado: boolean;
    RateStart: IRate;
    OCurso: ICurso;
}

const DocenteSchema= new mongoose.Schema({
    NombreDocente: {type: String, required: true},
    Aprobado: {type: Boolean,required: true},
    RateStart: {type: String, required: true},
    OCurso: {type: mongoose.Schema.Types.ObjectId, ref: "Curso"}
});

export const Docente = mongoose.model<IDocente>("Docente",DocenteSchema)

