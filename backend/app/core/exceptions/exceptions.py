class NotFoundException(Exception):
    pass 

class ValidationException(Exception):
    pass

class ExternalServiceException(Exception):
    pass

class AlreadyExistsException(Exception):
    pass


class PageNotFoundException(NotFoundException):
    pass