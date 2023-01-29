from flask import Flask, render_template
application = Flask(__name__)

contacts = [
    {'url': 'https://github.com/soheekim2109', 'alt': 'GitHub logo', 'title': 'GitHub'},
    {'url': 'https://www.linkedin.com/in/sohee-kim-a1a788233', 'alt': 'LinkedIn logo', 'title': 'LinkedIn'},
    {'url': 'mailto: soheekim2109@gmail.com', 'alt': 'Email icon', 'title': 'Email'},
]

projects = [
    {'url': '/portfolio', 'img': 'static/img/portfolio_comp.jpg', 'title': 'Portfolio', 'desc': 'This website'},
    {'url': '/sudoku', 'img': 'static/img/sudoku_comp.jpg', 'title': 'Sudoku', 'desc': 'Play sudoku online'},
]

@application.route('/')
def root():
    return render_template('index.html', indexpage=True, contacts=contacts, projects=projects)

@application.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', indexpage=False, title="Portfolio")

@application.route('/sudoku')
def sudoku():
    return render_template('sudoku.html', indexpage=False, title="Sudoku")

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=9090, debug=True)
