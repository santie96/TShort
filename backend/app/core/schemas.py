from pydantic import BaseModel, ConfigDict

class SyncModelORM(BaseModel):
    """
    Base class for Pydantic models to include the ORM model configuration and validation
    """
    
    model_config = ConfigDict(from_attributes=True)
