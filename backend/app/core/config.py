try:
    from pydantic_settings import BaseSettings, SettingsConfigDict
except ImportError:
    from pydantic import BaseSettings
    SettingsConfigDict = None

class Settings(BaseSettings):
    PROJECT_NAME: str = "Agentic SSO"
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_CHANGE_THIS_FOR_PROD"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    if SettingsConfigDict:
        model_config = SettingsConfigDict(env_file=".env", extra="ignore")
    else:
        class Config:
            env_file = ".env"
            extra = "ignore"

settings = Settings()
