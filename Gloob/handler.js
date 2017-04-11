module.exports = {
	error: function(status) {
		switch (status) {
			case 401: console.log('Erro na autenticação'); return true
			case 404: console.log('Erro na request'); return true;
			default: return false;
		}
	}
}