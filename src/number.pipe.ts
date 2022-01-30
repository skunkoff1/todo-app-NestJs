import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class NumberPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value = Number(value);
    console.log(typeof value, metadata);
    if(isNaN(value)) {
      throw new BadRequestException('mauvais paramètre dans l\'Url');
    }
    return value;
  }
}
