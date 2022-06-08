import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export class Alerts {

	static success(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('success', titulo, texto, textoConfirmacion);
	}

	static successTime(title: string): Promise<SweetAlertResult> {
		return Swal.fire({
            position: 'top-end',
            icon: 'success',
            title,
            showConfirmButton: false,
            timer: 1500
          });
	}

    static errorTime(title: string): Promise<SweetAlertResult> {
		return Swal.fire({
            position: 'top-end',
            icon: 'error',
            title,
            showConfirmButton: false,
            timer: 1500
          });
	}

	static warning(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('warning', titulo, texto, textoConfirmacion);
	}

	static error(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('error', titulo, texto, textoConfirmacion);
	}

	static info(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('info', titulo, texto, textoConfirmacion);
	}

	static question(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return this.generate('question', titulo, texto, textoConfirmacion);
	}

	static confirmation(titulo: string, texto?: string, textoConfirmacion?: string, textoCancelacion?: string): Promise<SweetAlertResult> {
		return Swal.fire({
            title: titulo,
            text: texto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: textoConfirmacion,
			cancelButtonText: textoCancelacion
        });
	}

	private static generate(icon:SweetAlertIcon ,titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
		return Swal.fire({
			icon,
			title: titulo,
			text: texto,
			confirmButtonText: textoConfirmacion || 'Aceptar'
		});
	}
}