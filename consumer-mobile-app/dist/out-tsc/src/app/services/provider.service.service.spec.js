import { TestBed } from '@angular/core/testing';
import { Provider } from './provider.service.service';
describe('Provider.ServiceService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(Provider.ServiceService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=provider.service.service.spec.js.map