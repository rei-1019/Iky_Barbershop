from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Mengirim rentang angka 1-10 (menghasilkan 1-9) ke template untuk galeri
    return render_template('index.html', gallery_range=range(1, 10))

if __name__ == '__main__':
    app.run(debug=True)