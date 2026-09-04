from app.core.exceptions.exceptions import *

# category exceptions
class CategoryNotFoundException(NotFoundException):
    pass

class CategoryAlreadyExistsException(AlreadyExistsException):
    pass

# subcategory exceptions
class SubCategoryNotFoundException(NotFoundException):
    pass

class SubCategoryAlreadyExistsException(AlreadyExistsException):
    pass

# product exceptions
class ProductNotFoundException(NotFoundException):
    pass

class ProductSlugAlreadyExistsException(AlreadyExistsException):
    pass

class InvalidImageURLException(ExternalServiceException):
    pass

class PageNotFoundException(NotFoundException):
    pass