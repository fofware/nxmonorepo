import { Component, ElementRef, EventEmitter, Output, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class FileUploadComponent {
  fileBase64 = signal<string | null>(null);
  fileName = signal<string>('');
  isLoading = signal<boolean>(false);

  @Output() fileUploaded = new EventEmitter<string>();
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    this.fileName.set(file.name);
    this.isLoading.set(true);

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      this.fileBase64.set(base64String);
      this.fileUploaded.emit(base64String);
      this.isLoading.set(false);
    };

    reader.onerror = () => {
      console.error('Error al leer el archivo');
      this.isLoading.set(false);
    };

    reader.readAsDataURL(file);
  }

  clearFile(): void {
    this.fileBase64.set(null);
    this.fileName.set('');
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
  }
}
