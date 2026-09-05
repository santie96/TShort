from app.core.exceptions.exceptions import *

# product exceptions
class ProductNotFoundException(NotFoundException):
    pass

class ProductSlugAlreadyExistsException(AlreadyExistsException):
    pass

class InvalidImageURLException(ExternalServiceException):
    pass

class PageNotFoundException(NotFoundException):
    pass