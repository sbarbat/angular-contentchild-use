import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUpdatesComponent } from './resource-updates.component';

describe('ResourceUpdatesComponent', () => {
  let component: ResourceUpdatesComponent;
  let fixture: ComponentFixture<ResourceUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
