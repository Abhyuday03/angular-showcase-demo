import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlarmsComponent } from './alarms.component';

describe('AlarmsComponent', () => {
    let component: AlarmsComponent;
    let fixture: ComponentFixture<AlarmsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlarmsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlarmsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
