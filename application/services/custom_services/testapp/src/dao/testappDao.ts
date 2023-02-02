import * as mongoose from 'mongoose';
import testappModel from '../models/daomodels/testapp';
import { CustomLogger } from '../config/Logger'


export class testappDao {
    private testapp = testappModel;
    constructor() { }
    
    public async GpDelete(testappId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpDelete');

    

    
    
    
    this.testapp.findByIdAndRemove(testappId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(testappData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(testappData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.testapp.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(testappData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpSearchForUpdate');

    

    
    
    
    this.testapp.findOneAndUpdate({ _id: testappData._id }, testappData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(testappData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpUpdate');

    

    
    
    
    this.testapp.findOneAndUpdate({ _id: testappData._id }, testappData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(testappId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpGetNounById');

    

    
    
    
    this.testapp.findById(testappId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpGetAllValues');

    

    
    
    
    this.testapp.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(testappData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpCreate');

    let temp = new testappModel(testappData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(testappData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testappDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.testapp.aggregate(([
                        { $match: { $and: [{ created_by: testappData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testappDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}