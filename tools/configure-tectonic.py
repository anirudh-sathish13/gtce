"""Optional local XeLaTeX adapter; ordinary TeX Live needs no configuration."""
from pathlib import Path
from xml.etree.ElementTree import Element, ElementTree
root = Path(__file__).resolve().parent.parent
ElementTree(Element('executables', xelatex=str(root / 'tools/tectonic-xelatex'))).write(root / 'executables.ptx', encoding='unicode')
print('Configured Tectonic. Delete executables.ptx to return to TeX Live.')
