import { Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('bootcamp')
export class BootcampController {

    @Get()
    getAllBootcamps():string{
        return "aqui se mostraran todos los bootcamps"
        
    }

    @Get (":id")
    getbootcampById(@Param('id') id:string): string{
        return 'aqui se va a mostrar el bootcmp por id:${id}'
    }

    @Post(":id")
    createBootcamp():string{
        return 'aqui se va a crear bootcamps'
    }

    @Put(":id")
    updatebootcamp(@Param('id') id: string) : string{
        return 'aqui se va a actualixar el bootcamp: ${id}'
    }

    @Delete(":id")
    deletebootcamp(@Param('id') id:string):string{
        return 'aqui se va a eliminar el bootcamp: '
    }

}
