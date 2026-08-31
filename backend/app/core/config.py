from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):

    # app name & debug
    APP_NAME: str
    
    PRODUCTION: bool

    # database
    POSTGRES_DRIVER: str
    POSTGRES_HOST: str
    POSTGRES_USER: str
    POSTGRES_PORT: int
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_MIGRATION_PORT: int
    
    # ======= security =======
    # hash
    ALGORITHM: str

    # auth
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE: int
    REFRESH_TOKEN_EXPIRE: int

    # csrf
    CSRF_SECRET_KEY: str

    # reset password
    RESET_PASSWORD_SECRET_KEY: str

    # frontend url
    FRONTEND_URL: str

    REFRESH_TOKEN_COOKIE_NAME: str

    # models
    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
