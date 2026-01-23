import { Component } from '@angular/core';
import responseCodes from '../../../assets/response-codes.json';

type CategoryKey =
  | 'Informational'
  | 'Success'
  | 'Redirection'
  | 'Client Error'
  | 'Server Error';

@Component({
  selector: 'app-response-codes',
  standalone: true,
  templateUrl: './response-codes.component.html',
  styleUrl: './response-codes.component.scss'
})
export class ResponseCodesComponent {
  groupedCodes: Record<CategoryKey, any[]> = {
    Informational: [],
    Success: [],
    Redirection: [],
    'Client Error': [],
    'Server Error': []
  };

  constructor() {
    for (const code of responseCodes) {
      this.groupedCodes[code.category as CategoryKey].push(code);
    }
  }

  categories: {
    key: CategoryKey;
    label: string;
    color: string;
  }[] = [
    { key: 'Informational', label: '1xx – Informational', color: '#6366f1' },
    { key: 'Success', label: '2xx – Success', color: '#22c55e' },
    { key: 'Redirection', label: '3xx – Redirection', color: '#3b82f6' },
    { key: 'Client Error', label: '4xx – Client Errors', color: '#f97316' },
    { key: 'Server Error', label: '5xx – Server Errors', color: '#ef4444' }
  ];

  copy(code: number) {
    navigator.clipboard.writeText(code.toString());
  }
}
