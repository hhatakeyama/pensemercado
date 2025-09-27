export function slugify(title) {
    if (!title) {
        return "";
    }

    // 1. Converte para minúsculas
    let slug = title.toLowerCase();

    // 2. Remove acentos e caracteres diacríticos (funciona bem com português, espanhol, etc.)
    // O normalize('NFD') separa o caractere base do diacrítico.
    // O replace(/[^\w\s-]/g, '') remove os diacríticos e outros caracteres.
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // 3. Remove caracteres não-alfanuméricos (exceto espaços e hífens)
    // O segundo replace mantém apenas letras, números e espaços, removendo pontuação.
    slug = slug.replace(/[^\w\s-]/g, '');

    // 4. Substitui todos os espaços (e múltiplos espaços) por um único hífen
    slug = slug.replace(/\s+/g, '-');

    // 5. Remove hífens extras no início ou no fim da string
    slug = slug.replace(/^-+|-+$/g, '');

    return slug;
}