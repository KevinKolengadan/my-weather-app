import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing getRoundValue for integer', () => {
    expect(service.getRoundValue(1)).toBe(1);
  });
  it('testing getRoundValue for lower bound rounding', () => {
    expect(service.getRoundValue(1.2)).toBe(1);
  });
  it('testing getRoundValue for upper bound rounding', () => {
    expect(service.getRoundValue(1.7)).toBe(2);
  });
  it('testing getRoundValue for middle rounding', () => {
    expect(service.getRoundValue(1.5)).toBe(2);
  });
  it('testing getUVIValue Low value testing', () => {
    expect(service.getUVIValue(0)).toBe('Low');
    expect(service.getUVIValue(2.9)).toBe('Low');
  });
  it('testing getUVIValue Moderate value testing', () => {
    expect(service.getUVIValue(3)).toBe('Moderate');
    expect(service.getUVIValue(5.9)).toBe('Moderate');
  });
  it('testing getUVIValue High value testing', () => {
    expect(service.getUVIValue(6)).toBe('High');
    expect(service.getUVIValue(7.9)).toBe('High');
  });
  it('testing getUVIValue Very High value testing', () => {
    expect(service.getUVIValue(8)).toBe('Very High');
    expect(service.getUVIValue(10.9)).toBe('Very High');
  });
  it('testing getUVIValue Extreme value testing', () => {
    expect(service.getUVIValue(11)).toBe('Extreme');
    expect(service.getUVIValue(15)).toBe('Extreme');
  });
  it('testing getDay', () => {
    expect(service.getDay(1612692240)).toBe('Today');
    expect(service.getDay(1612778640)).toBe('Mon');
  });
  it('testing getHour', () => {
    expect(service.getHour(1612692240)).toBe('21:04');
  });
  it('testing getDate', () => {
    expect(service.getDate(1612692240)).toBe('Feb 7');
  });
  it('testing gettime', () => {
    expect(service.gettime(1612692240)).toBe('21:04 PM');
  });
});
