import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BluiNavigationComponent } from './navigation.component';

describe('BluiNavigationComponent', () => {
    let component: BluiNavigationComponent;
    let fixture: ComponentFixture<BluiNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BluiNavigationComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BluiNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
