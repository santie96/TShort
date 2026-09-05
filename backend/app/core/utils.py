def create_slug(*args: str) -> str:
    """
    Create a slug from a list of strings with dash as separator
    """
    
    return "-".join([arg.lower().replace(" ", "-") for arg in args])