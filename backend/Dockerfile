# Immagine base di Python (versione slim per escludere pacchetti non necessari)
FROM python:3.14-slim

# work directory all'interno del Container
WORKDIR /app

# copia di requirements.txt per i requisiti
# layer cache di Docker, se non cambiano le dipendenze non vengono reinstallate
COPY requirements.txt .

# aggiornamento di pip per la versione più recente
RUN python -m pip install --upgrade pip

# installazione pacchetti necessari all'applicazione
# --no-cache-dir: evita di cachare i pacchetti nel container
RUN pip install --no-cache-dir -r requirements.txt

# copia l'intero codice 
# eseguito dopo le dipendenze, se cambia solo il codice viene rieseguito solo da qui in poi
COPY . .

# il container ascolterà su questa porta (solo informativo finchè non viene creato il container)
EXPOSE 8000

# appena si crea il container viene lanciato il comando
# --reload non presente per la produzione
# presente invece nello yaml di docker-compose
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]