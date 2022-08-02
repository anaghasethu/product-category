import { TestBed } from "@angular/core/testing";
import { ManageServiceService } from "./ManageService.service";

describe('ManageServiceService',() => {
    let service: ManageServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ManageServiceService);
    });
    it('should be created',() => {
        expect(service).toBeTruthy();
    });
});