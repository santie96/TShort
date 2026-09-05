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

class SubCategorySlugAlreadyExistsException(AlreadyExistsException):
    pass