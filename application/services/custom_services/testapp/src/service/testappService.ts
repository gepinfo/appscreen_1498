import { Request, Response } from 'express';
import {testappDao} from '../dao/testappDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let testapp = new testappDao();

export class testappService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpDelete')
     let  testappId = req.params.id;
     testapp.GpDelete(testappId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpSearch')
     let  testappData = req.query;
     testapp.GpSearch(testappData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpSearchForUpdate')
     let  testappData = req.body;
     testapp.GpSearchForUpdate(testappData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpUpdate')
     let  testappData = req.body;
     testapp.GpUpdate(testappData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpGetNounById')
     let  testappId = req.params.id;
     testapp.GpGetNounById(testappId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpGetAllValues')
     
     testapp.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpCreate')
     let  testappData = req.body;
     testapp.GpCreate(testappData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testappService.ts: GpGetNounCreatedBy')
     let  testappData = { created_by: req.query.createdby };
     testapp.GpGetNounCreatedBy(testappData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testappService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}