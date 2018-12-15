import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { CooperProvider } from '../cooper/cooper';

@Injectable()
export class CalculationProvider {
public gender: string;
public age: number;
public assessmentMessage: string;

    constructor(private cooper: CooperProvider) {}

    doAssessment(distance: number): void {
        this.assessmentMessage = this.cooper.assess(this, distance);
    }

}